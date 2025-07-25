class solve
{
	int pal(String a)
	{
		String rev=new StringBuilder(a).reverse().toString();
		if(a.equalsIgnoreCase(rev))
		{
			return 1;
		}
		else
		{
			return 0;
		}
	}
}
class palindrome
{
	public static void main(String args[])
	{
		String str="Madam";
		solve s=new solve();
		int ans=s.pal(str);
		if(ans==1)
		{
			System.out.println("It is a Palindrome");
		}
		else
		{
			System.out.println("It is not a Palindrome");
		}
	}
}