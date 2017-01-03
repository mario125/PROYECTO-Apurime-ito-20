<?php /* Smarty version 3.1.27, created on 2017-01-02 16:04:25
         compiled from "C:\xampp\htdocs\apurimac\styles\templates\home\index.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:14252586a6bf9b28701_52721255%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c1cadd7164f8bd8b254567b6e5372fbe95d0a368' => 
    array (
      0 => 'C:\\xampp\\htdocs\\apurimac\\styles\\templates\\home\\index.tpl',
      1 => 1483369460,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '14252586a6bf9b28701_52721255',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_586a6bf9b82b96_85520180',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_586a6bf9b82b96_85520180')) {
function content_586a6bf9b82b96_85520180 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '14252586a6bf9b28701_52721255';
echo $_smarty_tpl->getSubTemplate ('overall/header.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>


  <body>

  <?php echo $_smarty_tpl->getSubTemplate ('overall/nav.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>


<div class="container">
<div class="row">
   <div class="col s12 col m8 push-m2  col l6 push-l3">

          <div class="col s12">
          </br>
            </br>
              </br>
                </br>
                  </br>
                    </br>
                      </br>
                        </br>
                          </br>
                            </br>
                              </br>
                                </br>
                                  </br>
                                    </br>
                                      </br>
                                        </br>
                      </br>
                     <button id="sub"style="background:orange" class="btn waves-effect orange waves-light" type="submit" name="action">login
           </div>

    </div>
    </div>
    </div>










  <?php echo $_smarty_tpl->getSubTemplate ('overall/footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>

<?php echo '<script'; ?>
>
  window.onload=function(){
    document.getElementById('sub').onclick=function(){
      location.href= '?view=login';
    }
  }



  <?php echo '</script'; ?>
>

  </body>
</html>
<?php }
}
?>