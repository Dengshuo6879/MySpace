//给一个input绑定enter
/*
<input type="text" id="input">


$('#input').keydown(function (e) {
  if (e.keyCode == '13') {
    $('#btn').click();
  }
})
$('#btn').click(function(){
  console.log($('#input').val());
})
*/

//给多个input绑定enter
/*
<div id="container">
  <input type="text" id="input1">
  <input type="text" id="input2">
</div>
<button id="btn">btn</button>

$('#container').keydown(function (e) {
  if (e.keyCode == '13') {
    $('#btn').click();
  }
})
$('#btn').click(function(){
  console.log($('#input1').val());
  console.log($('#input2').val());
})
*/