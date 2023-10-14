<?php
$conn = new mysqli('localhost', 'root', '', 'base1');
$product_n=$_POST['product_n'];
$amount=$_POST['amount'];
 $result = $conn->query("select id from table1");
          //определяем количество полученных записей
          $id = $result->num_rows;
		  $id = $id+1;
$sql="INSERT INTO `table1` (`id`, `product_n`, `amount`) VALUES ('$id', '$product_n', '$amount')";
if ($conn->query($sql) == TRUE) {
    echo "data inserted";
}
else 
{
    echo "failed";
}
?>