const fs = require('fs');
const path = require('path');

class CovidConfig {
    constructor(configPath = 'covid_config.json') {
        this.configPath = path.join(__dirname, configPath);
        this.defaultConfig = {
            "satuan_suhu": "celcius",
            "batas_hari_deman": 14,
            "pesan_ditolak": "Anda tidak diperbolehkan masuk ke dalam gedung ini",
            "pesan_diterima": "Anda dipersilahkan untuk masuk ke dalam gedung ini"
        };
        this.config = this.loadConfig();
    }

    loadConfig() {
        try {
            if (fs.existsSync(this.configPath)) {
                const rawData = fs.readFileSync(this.configPath, 'utf-8');
                const config = JSON.parse(rawData);

                // Merge with default config to ensure all keys exist
                return {...this.defaultConfig, ...config };
            } else {
                // Create config file with default values if not exists
                fs.writeFileSync(this.configPath, JSON.stringify(this.defaultConfig, null, 2));
                return this.defaultConfig;
            }
        } catch (error) {
            console.error('Error loading config:', error);
            return this.defaultConfig;
        }
    }

    getConfig() {
        return this.config;
    }

    updateConfig(newConfig) {
        try {
            this.config = {...this.config, ...newConfig };
            fs.writeFileSync(this.configPath, JSON.stringify(this.config, null, 2));
            return true;
        } catch (error) {
            console.error('Error updating config:', error);
            return false;
        }
    }

    ubahSatuan() {
        const currentUnit = this.config.satuan_suhu.toLowerCase();
        const newUnit = currentUnit === 'celcius' ? 'fahrenheit' : 'celcius';
        this.updateConfig({ "satuan_suhu": newUnit });
        return newUnit;
    }

    getSatuanSuhu() {
        return this.config.satuan_suhu;
    }

    getBatasHariDeman() {
        return this.config.batas_hari_deman;
    }

    getPesanDitolak() {
        return this.config.pesan_ditolak;
    }

    getPesanDiterima() {
        return this.config.pesan_diterima;
    }
}

module.exports = CovidConfig;