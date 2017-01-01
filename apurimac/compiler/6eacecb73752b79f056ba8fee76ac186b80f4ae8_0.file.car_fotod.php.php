<?php /* Smarty version 3.1.27, created on 2016-12-26 19:33:49
         compiled from "C:\xampp\htdocs\pueva\avanzado\styles\templates\overall\car_fotod.php" */ ?>
<?php
/*%%SmartyHeaderCode:320045861628ddf6741_81205268%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '6eacecb73752b79f056ba8fee76ac186b80f4ae8' => 
    array (
      0 => 'C:\\xampp\\htdocs\\pueva\\avanzado\\styles\\templates\\overall\\car_fotod.php',
      1 => 1482777164,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '320045861628ddf6741_81205268',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5861628de00e91_46683288',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5861628de00e91_46683288')) {
function content_5861628de00e91_46683288 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '320045861628ddf6741_81205268';
echo '<?php
 ';?>$smarty = new smarty;
 $miarray = array(
   array('name' => 'John Smith', 'home' => '555-555-5555',
         'cell' => '666-555-5555', 'email' => 'john[at]myexample[dot]com'),
   array('name' => 'Jack Jones', 'home' => '777-555-5555',
         'cell' => '888-555-5555', 'email' => 'jack[at]myexample[dot]com'),
   array('name' => 'Jane Munson', 'home' => '000-555-5555',
         'cell' => '123456', 'email' => 'jane[at]myexample[dot]com'));
$smarty->assign("row",$miarray); 

    <?php echo '?>';

}
}
?>