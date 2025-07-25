class count
{
	public static void main(String args[])
	{
		String s=" Hi how are you";
		s=s.trim();
		int ans=0;
		for(char i: s.toCharArray())
		{
			if(!Character.isLetter(i))
			{
				ans++;
			}
		}
		ans=ans+1;
		System.out.println("No.of Words: "+ans);
	}
}