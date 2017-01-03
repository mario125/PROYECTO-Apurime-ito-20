{include 'overall/header.tpl'}

  <body>

  {include 'overall/nav.tpl'}

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










  {include 'overall/footer.tpl'}
<script>
  window.onload=function(){
    document.getElementById('sub').onclick=function(){
      location.href= '?view=login';
    }
  }



  </script>

  </body>
</html>
