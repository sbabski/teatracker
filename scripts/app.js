var data = '{"locals" : [{"id": 5, "user": "Bruce", "tea": "Green Dragon", "rate": 1, "timestamp": [10, 13, 15, 54]}, {"id": 4, "user": "Denis", "tea": "Blackberry Wake-Up", "rate": 3, "timestamp": [10, 13, 12, 22]}, {"id": 3, "user": "Lola", "tea": "Jasmine", "rate": 5, "timestamp": [10, 12, 4, 19]}, {"id": 2, "user": "Randall", "tea": "Irish Breakfast", "rate": 3, "timestamp": [10, 12, 8, 5]}, {"id": 1, "user": "Janette", "tea": "Lemon Ginger", "rate": 2, "timestamp": [10, 11, 4, 31]}], "friends" : [{"id": 5, "user": "Tina", "tea": "Southern White Leaf Special", "rate": 4, "review": "", "timestamp": [10, 13, 15, 54]}, {"id": 4, "user": "Joseph", "tea": "Earl Grey", "rate": 3, "review": "", "timestamp": [10, 13, 12, 22]}, {"id": 3, "user": "Spencer", "tea": "Matcha Green", "rate": 2, "review": "", "timestamp": [10, 12, 4, 19]}, {"id": 2, "user": "Beth", "tea": "Peppermint", "rate": 5, "review": "", "timestamp": [10, 12, 8, 5]}, {"id": 1, "user": "Sebastian", "tea": "Oolong", "rate": 4, "review": "", "timestamp": [10, 11, 4, 31]}], "users" : [{"name": "You", "birthday": [0,0,0], "type": "friends", "reviews": [], "friends": []}, {"name": "Bruce", "type": "locals", "username": "bruce", "birthday" : [9,10,1990], "gender" : "male", "favorites": ["Blue Lady", "Ceylon"], "friends" : ["Denis","Randall","Janette","Joseph"], "reviews": [5,101,102,103,104]}, {"name": "Denis", "type": "locals", "username": "abcdefghijklmnopquer", "birthday" : [9,10,1990], "gender" : "male", "favorites": ["Blue Lady", "Ceylon"], "reviews": [5,101,102,103,104]}]}';
var copy = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis purus ac nunc egestas dictum. Aliquam mattis lacinia augue ac convallis. Phasellus egestas metus in risus consequat blandit. Maecenas sagittis bibendum sapien sit amet blandit. Donec quis semper nunc. Praesent leo quam, semper non egestas a, faucibus ut lectus. Ut blandit erat nunc, ac faucibus turpis laoreet sit amet.';
var copy2 = 'Suspendisse et malesuada orci. Praesent viverra maximus convallis. Cras commodo nulla eu mauris auctor placerat. Proin pretium, mi id tristique imperdiet, ex quam molestie sapien, sed dapibus felis elit vitae ligula. Donec commodo purus nec mauris tincidunt convallis. Integer tristique at tortor ut porttitor. In hac habitasse platea dictumst. Donec tincidunt libero non massa euismod dictum. Nunc in porttitor eros. Sed nec nunc pulvinar urna molestie sagittis.';
$(document).ready(function () {
  $(document).foundation();

  if(!sessionStorage.getItem('a')) {
    sessionStorage.setItem('a', 'true');
    sessionStorage.setItem('data', data);
  }

  //add lorem ipsum copy
  $('.copy').text(copy);
  $('.copy2').text(copy2);

  //hide/show reviews
  $('.review-button').click(function () {
    $('.' + $(this).attr('id')).toggle();
  });

  //add cup of favorite tea
  $('#addFav').click(function() {
    var orig = $(this).attr('href');
    $(this).attr('href', orig + $('#selectFav option:selected').val())
  });

  //make tabs work correctly
  $('#tab3').click(function () {
    $(this).removeClass('active');
    $('#tab1').addClass('active');
    $('#tab2').addClass('active');
    $('#tab1content').removeClass('active');
    $('#tab2content').removeClass('active');
    $('#tab3content').addClass('active');
  });
  $('#tab2').click(function () {
    $(this).removeClass('active');
    $('#tab1').addClass('active');
    $('#tab3').addClass('active');
    $('#tab1content').removeClass('active');
    $('#tab3content').removeClass('active');
    $('#tab2content').addClass('active');
  });
  $('#tab1').click(function () {
    $(this).removeClass('active');
    $('#tab2').addClass('active');
    $('#tab3').addClass('active');
    $('#tab2content').removeClass('active');
    $('#tab3content').removeClass('active');
    $('#tab1content').addClass('active');
  });
});

function loadPage(tempId, context) {

  loadPartials();
  var source = $(tempId).html();
  var template = Handlebars.compile(source);
  Handlebars.registerPartial("nav", $("#nav-partial").html());
  Handlebars.registerPartial("add", $("#add-partial").html());
  $(document.body).append(template(context));
};

function loadPartials() {
  var nav = ' \
    <script id="nav-partial" type="text/x-handlebars-template"> \
      <nav class="top-bar" data-topbar role="navigation"> \
        <ul class="title-area"> \
          <li class="name"> \
            <h1><a href="teatracker.html">Tea Tracker</a></h1> \
          </li> \
          <li class="toggle-topbar menu-icon"><a href="timeline.html"><span></span></a></li> \
        </ul> \
        <section class="top-bar-section"> \
          <ul class="right"> \
            <li class="has-form" id="search"> \
              <div class="row collapse postfix"> \
                <div class="small-9 columns"> \
                  <input type="text" placeholder="Find a tea or person..."> \
                </div> \
                <div class="small-3 columns"> \
                  <a href="error.html" class="button secondary postfix" style="padding-top:0;padding-left:1.25rem">Go</a> \
                </div> \
              </div> \
            </li> \
            <li id="nav-discover"><a href="discover.html">Discover</a></li> \
            <li id="nav-add"><a href="add.html#">Add Cup</a></li> \
            <li id="nav-profile"><a href="profile.html#">Profile</a></li> \
            <li><a href="error.html">Settings</a></li> \
          </ul> \
        </section> \
      </nav> \
    </script> \
  '
  var add = ' \
    <script id="add-partial" type="text/x-handlebars-template"> \
      <div class="row centered spaced"> \
        <h1 class="spaced">Have you had a cup of tea today?</h1> \
      </div> \
      <div class="row spaced"> \
        <div class="small-12 large-8 medium-10 medium-centered columns"> \
          <div class="row">\
            <div class="small-7 columns"> \
              <div class="row collapse"> \
                <div class="small-8 columns"> \
                  <select id="selectFav"> \
                    <option value="">Select favorite tea below</option> \
                    <option value="darjeeling">Darjeeling</option> \
                    <option value="english-breakfast">English Breakfast</option> \
                    <option value="gunpowder-mint">Gunpowder Mint</option> \
                  </select> \
                </div> \
                <div class="small-4 columns"> \
                  <a id="addFav" href="add.html#" class="button postfix">Add</a> \
                </div> \
              </div> \
            </div> \
            <div class="small-1 columns"> \
              <div class="centered offset">or</div> \
            </div> \
            <div class="small-4 columns"> \
              <a href="add.html#" class="button button-add">Add new tea</a> \
            </div> \
          </div> \
        </div> \
      </div> \
    </script> \
  '
  $("body").prepend(nav);
  $("body").prepend(add);
};