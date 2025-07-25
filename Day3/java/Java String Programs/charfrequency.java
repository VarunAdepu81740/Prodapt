class charfrequency
{
	public static void main(String args[])
	{
		String s="Java";
		int ans=0;
		char t='a';
		for(char i: s.toCharArray())
		{
			if(i==t)
			{
				ans++;
			}
		}
	System.out.println(ans);
	}
}
