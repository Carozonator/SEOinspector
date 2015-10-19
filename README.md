# SEOinspector
Looks for all the links within your website

Instructions:
  Just import the .js file in any page you want. and replace, homePage with the page to use.
   var homePage = "http://www.mywebsite.com/";
  Run the page and check the console of the browser.
Output:
  It will print in the console all the imgs src and hrefs. And go recursively to all of the pages that are subdirectories of the homepage.
  Example output.:
  
   Current Page:  http://www.example.com/
    Images:
      //cdn2.host.net/logo-1.png
      //cdn2.host.net/example/migration_assets/text_cal.png
    Links:
      href= /example-promotions  class= button red  id= email_list
      href= http://www.facebook.com/exampleCompany  class= undefined  id= facebook
      href= /subdirectory-news  class= undefined  id= video_sonora
  
