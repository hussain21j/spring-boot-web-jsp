# spring-boot-web-jsp
This is GUI based sorting Application

User Story : As given in Document<br>
<br>
<br>
Problem Statement Understanding : <br>
 -Build a web based application to sort numbers<br>
 -User Should be able to enter multiple numbers and sort the numbers <br>
 -User should see the response of sorted number, time taken and movement count of numbers<br>
 -User should be able to see the previous histroy of its sorts done<br>
<br>
<br>
Technologies and tools Used:<br>
<table
  <tr>
    <td>Spring Boot</td>
    <td>To Quick build the application use of fetaure of inbuilt Web container and Database </td>
  </tr>
  
  <tr>
    <td>Spring MVC, REST</td>
    <td>Server side MVC structure of application. Spring Rest Serices are used to get data from the server. The Ajax request are initiated from the  The angular controller services</td>
  </tr>
  
  <tr>
    <td>JPA</td>
    <td>For persistance</td>
  </tr>
  
  <tr>
    <td>H2 database</td>
    <td>Spring boots inbuild H2 database used for storing the information</td>
  </tr>
  
   
  <tr>
    <td>HTML and JSP</td>
    <td>For structuring the Web page</td>
  </tr>
  
   
  <tr>
    <td>Angular JS</td>
    <td>For Client side MVC operation</td>
  </tr>
  
  <tr>
    <td>CSS</td>
    <td>for styling the view</td>
  </tr>
  
  <tr>
    <td>JSON</td>
    <td>for data exchange between clien side and server side</td>
  </tr>
  
  <tr>
    <td>Java Script </td>
    <td>for client side validation</td>
  </tr>
 
  <tr>
    <td>Junit, Mockito</td>
    <td>for unit testing</td>
  </tr>
  
  <tr>
    <td>Eclipse Neon </td>
    <td>IDE Used for development</td>
  </tr>
  
  <tr>
    <td>Maven</td>
    <td>Build Tool</td>
  </tr>
</table>


<br>
<br>
How To Run The Application<br>
 -Download the Applicatin Zip from the gitHub repository<br>
 -Unzip and import the project in eclipse by selecting option File -> Import -> Choose Maven -> Existing Maven Project
  &nbsp;-> Click Next -> Select the directory of unzipped project and press ok	
 -Let the depencies be loaded and build the project<br>
 -Run the application by Right click on the project -> Run as -> Maven build<br>
 -Use the goal command of maven as spring-boot:run<br>
 -Once its done server will start on port 8080<br>
 -Open browser and enter URI http://localhost:8080/, Application will reach to homepage<br>
 -If any Java, JDK or copilation related issue is faced, then make sure eclipse is pointing to JDK not JRE. To point to JDK
  &nbsp;Right click on the project in Eclipse -> Properties -> Java Build Path -> Select Libraries -> Select JDK home directory
<br>
<br>
How To Use the Appliction<br>
 -User can add multiple numbers by clicking on button 'Add Number'<br>
 -Sort the input numbers by clicking on the 'Sort Numbers' Button<br>
 -IF you want to see the history of sorts click on the 'Sort Histroy' Button, <br>
  &nbsp;Every time this buton is clicked it will fetch the latest records from data base<br>
-The History of sort sections shows lates 10 sorts done
