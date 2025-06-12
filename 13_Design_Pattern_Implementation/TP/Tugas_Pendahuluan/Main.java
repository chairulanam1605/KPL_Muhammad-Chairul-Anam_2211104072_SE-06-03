public class Main {
    public static void main(String[] args) {
        Subject subject = new Subject();

        Observer observer1 = new ConcreteObserver("Anam");
        Observer observer2 = new ConcreteObserver("Arka");

        subject.attach(observer1);
        subject.attach(observer2);

        subject.createMessage("Haii, Senang Bertemu Dengan Mu");

        subject.detach(observer1);

        subject.createMessage("Ayo pergi");
    }
}
