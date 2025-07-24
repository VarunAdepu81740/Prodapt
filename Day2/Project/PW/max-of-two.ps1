#Maximum of two

$a=Read-Host "Enter First Number"
$b=Read-Host "Enter second Number"
if([int]$a -gt [int]$b){
	Write-Output "$a is greater than $b"
}else{
	Write-Output "$b is greater than $a"
}