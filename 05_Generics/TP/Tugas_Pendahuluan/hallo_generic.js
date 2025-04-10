class HaloGeneric {
    SapaUser(X) {
        console.log(`Halo user ${X}`);
    }
}

function main() {
    const halogeneric = new HaloGeneric();
    const namaPanggilan = "Anam";
    halogeneric.SapaUser(namaPanggilan);
}

main();