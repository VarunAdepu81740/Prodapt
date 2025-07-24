#Calculator

$a=[int](Read-Host "Enter First Number")
$b=[int](Read-Host "Enter second Number")

Write-Output "Select Operation"
Write-Output "1.Add"
Write-Output "2.Subtract"
Write-Output "3.Multiply"
Write-Output "4.Divide"

$c=[int](Read-Host "Enter the Operation (1-4)")
switch($c){
	1{$ans=$a+$b; Write-Output "Result:$ans"}
	2{$ans=$a-$b; Write-Output "Result:$ans"}
	3{$ans=$a*$b; Write-Output "Result:$ans"}
	4{
		if($2 -ne 0){
			$ans=$a/$b
			Write-Output "Result: $ans"
		}else{
			Write-Output "Error: Cannot divide by zero"
		}

	}
	Default {Write-Output "Invalid Choice"}
}
