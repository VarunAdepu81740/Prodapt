class A
{
	A()
	{
		System.out.println("Constructor");
	}
	int display(int x,int y)					
	{
		System.out.println("Method - Creating object");
		return x+y;
	}
}
public class Demo1
{
	public static void main(String args[])
	{
		System.out.println("Hii");
		int x=10;
		int y=20;
		A a=new A();
		System.out.println(a.display(x,y));
	}
}