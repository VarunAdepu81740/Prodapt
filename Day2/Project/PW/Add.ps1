#Adding two numbers

$a=Read-Host "Enter First Number"
$b=Read-Host "Enter second Number"
$sum=[int]$a+[int]$b
Write-Output "Sum of $a and $b is: $sum"