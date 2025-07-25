class reverseword
{
	public static void main(String args[])
	{
		String s="Madam Sir Madam";
		String[] arr=s.split(" ");
		for(String i:arr)
		{	
			String x=new StringBuilder(i).reverse().toString();
			System.out.print(x+" ");
		}
	}
}