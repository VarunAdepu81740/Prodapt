class vowelconsonant
{	
	public static void main(String args[])
	{
	int vowels=0; 
	int consonants=0;
	String s="Java Programming";
	s=s.toLowerCase();
	for(char i:s.toCharArray())
	{
		if(Character.isLetter(i))
		{
			if("aeiou".contains(String.valueOf(i)))
			{
				vowels++;
			}
			else
			{
				consonants++;
			}
		}
	}
	System.out.println("Vowels :"+vowels);
	System.out.println("Consonants :"+consonants);

	}
}