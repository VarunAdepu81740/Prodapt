class A
{
	A()
	{
		System.out.println("Constructor");
	}
	static int display(int x,int y)					//Using static : no need to create the object
	{
		System.out.println("Method - Without Creating Object");
		return x+y;
	}
}
public class Staticdemo
{
	static int b=100;
	static void display1()
	{
		System.out.println("Method in main class");
	}
	public static void main(String args[])
	{
		System.out.println("Hii");
		int x=10;
		int y=20;
		System.out.println(A.display(x,y));
		System.out.println(b);
		display1();
	}
}