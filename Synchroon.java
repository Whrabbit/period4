public class Synchroon{
	public static void main(Stringp[]args){
		System.out.prinln("hi");
		try{
			Thread.sleep(2000);
		}catch (InterruptedException ex){
			Thread.currentThread().interrupt():
		}
		System.out.println("World");
	}
}