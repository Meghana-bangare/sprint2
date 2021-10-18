package stepdefiniton;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import hooks.Hookclass;

public class stepdefination {
	WebDriver driver=Hookclass.driver;
	Actions actions = new Actions(driver);
	
@Given("User is on  unfirom application login page")
public void user_is_on_unfirom_application_login_page() {
	
   System.out.println("user is on login page");
}
@When("user enter {string} and {string}")
	public void user_enter_and(String username, String password) {
	   try {
		   driver.findElement(By.xpath("(//input[@id='input-username'])[1]")).sendKeys(username);
		   driver.findElement(By.xpath( "//input[@id='input-password']")).sendKeys(password);
		   System.out.println("Credentials added successfully!");	
		   Thread.sleep(3000);		
		   }
	   catch(Exception e)
	   {
		   System.out.println("Not able to enter username and password"+e);
		  
	   }
	}

	@When("click on login buttton")
	public void click_on_login_buttton() {
try {
	WebElement button= driver.findElement(By.xpath("//button[normalize-space()='Login']"));
	button.click();
}
catch(Exception e) {
	System.out.println("Not able click on login"+e);
	Assert.fail();
}
	}
	@Then("user will be logged in")
	public void user_will_be_logged_in() {
		  try
		   {
			   String actual=driver.getTitle();
			   String ex="Dashboard";
			   Assert.assertEquals(actual,ex);
			   System.out.println("User is in the Dashboard");
		   }
		    catch(Exception e) {
		    System.out.println("Error: Headings dont match. "+e);
		    Assert.fail();
		}
		
	}
	
	@Given("user is on the dashboard page")
	public void user_is_on_the_dashboard_page() {
		 try
		   {
			   String actual=driver.getTitle();
			   String ex="Dashboard";
			   Assert.assertEquals(actual,ex);
			   System.out.println("User is in the Dashboard");
		   }
		    catch(Exception e) {
		    System.out.println("Error: Headings dont match. "+e);
		    Assert.fail();
		}
		
	}
	
	 
	@When("user hover over the catalog")
	public void user_hover_over_the_catalog() {
	   
	    try {
	    	
	    	 driver.findElement(By.xpath( "//body/div[@id='container']/nav[@id='column-left']/ul[@id='menu']/li[@id='catalog']/a[1]")).click();
	    	 Thread.sleep(2000);
	    }
	    catch(Exception e) {
	    System.out.println("Not able to hover on catalog"+e);
	    Assert.fail();
	}
	}

	@When("user click on product")
	public void user_click_on_product() {
		try {
			WebElement product= driver.findElement(By.xpath("//li[@id='catalog']//ul//li//a[contains(text(),'Products')]"));
			product.click();
			Thread.sleep(1000);
		
		}
		catch(Exception e) {
			System.out.println("Not able click on login"+e);
			Assert.fail();
		}

	    
	}

	@Then("user is directed to product page")
	public void user_is_directed_to_product_page() {
		  try
		   {
			   String s=driver.getTitle();
			   String ex="Products";
			   Assert.assertEquals(s,ex);
			   System.out.println("User is in the Products page");
		   }
		    catch(Exception e) {
		    System.out.println("Error: Headings dont match. "+e);
		    Assert.fail();
		}
		}
		
	@Given("user is on product page")
	public void user_is_on_product_page() {
	    try
		   {
			   String s=driver.getTitle();
			   String ex="Products";
			   Assert.assertEquals(s,ex);
			   System.out.println("User is in the Products page");
		   }
		    catch(Exception e) {
		    System.out.println("Error: Headings dont match. "+e);
		    Assert.fail();
		}
		}
	@When("user enter details {string},{string},{string}and {string}")
	public void user_enter_details_and(String product, String price, String model, String quantity) {
	   
	
	    try {
	    	driver.findElement(By.xpath("//input[@id='input-name']")).sendKeys(product);
	    	driver.findElement(By.xpath("//input[@id='input-price']")).sendKeys(price);
	    	driver.findElement(By.xpath("//input[@id='input-model']")).sendKeys(model);
	    	driver.findElement(By.xpath("//input[@id='input-quantity']")).sendKeys(quantity);
	    	Thread.sleep(2000);
	    }
	    catch(Exception e) {
	    	System.out.println("Not able to enter the details"+e);
	    	Assert.fail();
	    }
	}
	

	@When("user selects {string}")
	public void user_selects_status_option(String status) {
	  try {
		  if(status.equals("*"))
			    driver.findElement(By.xpath("//select[@name='filter_status']//following::option[1]")).click();
				else if(status.equals("1"))
				driver.findElement(By.xpath("//select[@name='filter_status']//following::option[2]")).click();
				else if(status.equals("0"))
			    driver.findElement(By.xpath("//select[@name='filter_status']//following::option[3]")).click();
		  Thread.sleep(5000);
				
  }
	  catch(Exception e) {
		  System.out.println("unable to select status"+e);
		 
	  }
	}

	@When("click on filter button")
	public void click_on_filter_button() {
	    try {
	    	driver.findElement(By.xpath("//*[@class='btn btn-primary pull-right']")).click();
	    	  System.out.println();
	    	  Thread.sleep(6000);
	    }
	    catch(Exception e) {
	    	  System.out.println("unable to filter"+e);
	    }
	}

	@Then("user gets the details of the product")
	public void user_gets_the_details_of_the_product() {
		 try
		  {    
			  String s=driver.findElement(By.xpath("(//div[@class='col-sm-6 text-right'])[1]")).getText();
			  if(s.equals("Showing 0 to 0 of 0 (0 Pages)"))
			  {
				 String comment= driver.findElement(By.xpath("//*[@id='form-product']/div/table/tbody/tr/td")).getText();
				 String excomment="No results!";
				 Assert.assertEquals(comment,excomment);
				 System.out.println(excomment);
			  }
			  
			  else
			  {
				  String pname= driver.findElement(By.xpath("//*[@id='form-product']/div/table/tbody/tr[1]/td[3]")).getText();
					 String expname="Brown T shirt";
					 Assert.assertEquals(pname,expname);
					 System.out.println(pname+" has been filtered ");
			  }
		  }
		  catch(Exception e)
		  {
			  System.out.println("Error: Filter is failing "+e);
				Assert.fail();
		  }
	}

@When("user selects product to be copied")
public void user_selects_product_to_be_copied() {
	driver.findElement(By.xpath("(//tr/td/input)[2]")).click();
	driver.findElement(By.xpath("(//tr/td/input)[3]")).click();
	
}

@When("user clicks on copy")
public void user_clicks_on_copy() {
	try {
	driver.findElement(By.xpath("//button[@class='btn btn-default']")).click();
}
catch(Exception e) {
	System.out.println("unable to copy"+e);
}
}

@Then("copying is done")
public void copying_is_done() {
	try{
		String m=driver.findElement(By.xpath("(//div[@class='alert alert-success'])[1]")).getText();
		String string="Success: You have modified products!";
		Assert.assertTrue(m.contains(string));
	 }
catch(Exception e)
{
	System.out.println("Error: Product could not be modified "+e);
	Assert.fail();
}
}

@When("user selects product to be deleted")
public void user_selects_product_to_be_deleted() {
	driver.findElement(By.xpath("(//tr/td/input)[3]")).click();
	
}

@When("user clicks on delete")
public void user_clicks_on_delete() {
	try {
	
	driver.findElement(By.xpath("//i[@class='fa fa-trash-o']")).click();
	 Alert alert=driver.switchTo().alert();   
	 alert.accept();
}
catch(Exception e) {
	System.out.println("unable to delete"+e);
}
}


@Then("user deletion is done")
public void user_deletion_is_done() {
	try{
		String d=driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		String string="Success: You have modified products!";
		Assert.assertTrue(d.contains(string));
		Thread.sleep(3000);
	 }
catch(Exception e)
{
	System.out.println("Error: Product could not be deleted "+e);
	Assert.fail();
}
}

@When("user clicks on product name field")
public void user_clicks_on_product_name_field() {
	try {
	driver.findElement(By.xpath("//a[normalize-space()='Product Name']")).click();
}
catch(Exception e) {
	System.out.println("unable to click on name"+e);
}
}
@Then("product list is sortedin descending order")
public void product_list_is_sortedin_descending_order() {
	try{
		String str1=driver.findElement(By.xpath("//table//following::tr[2]/td[3]")).getText();	
	String str2=driver.findElement(By.xpath("//table//following::tr[3]/td[3]")).getText();
	Assert.assertTrue(str1.compareTo(str2)>0 || str1.compareTo(str2)==0);
	System.out.println("Sorted in descending order");
	}
	catch(Exception e) {
	System.out.println("Error: Sorting not working");
	Assert.fail();
	}
}

@When("user clicks on  model field")
public void user_clicks_on_model_field() {
	try {
	driver.findElement(By.xpath("//a[normalize-space()='Model']")).click();
}
catch(Exception e) {
	System.out.println("unable to click on model field"+e);
}
}
@Then("list is sorted in ascending order")
public void list_is_sorted_in_ascending_order() {
	try {
		String str1=driver.findElement(By.xpath("//table//following::tr[2]/td[4]")).getText();	
		String str2=driver.findElement(By.xpath("//table//following::tr[3]/td[4]")).getText();
		Assert.assertTrue(str1.compareTo(str2)<0 || str1.compareTo(str2)==0);
		System.out.println("Sorted according to Model");
	}
		catch(Exception e)
		{
			System.out.println("Error: Sorting not working");
			Assert.fail();
		}
	}


@When("user clicks on price field")
public void user_clicks_on_price_field() {
	try {
	driver.findElement(By.xpath("//a[normalize-space()='Price']")).click();
	}
	catch(Exception e) {
		System.out.println("unable to click on price"+e);
	}
}
@Then("price row is sorted in descending order")
public void price_row_is_sorted_in_descending_order() {
	try {
		String s1=driver.findElement(By.xpath("//table//following::tr[2]/td[5]")).getText();	
		String s2=driver.findElement(By.xpath("//table//following::tr[3]/td[5]")).getText();
		Assert.assertTrue(s1.compareTo(s2)>0 || s1.compareTo(s2)==0);
		System.out.println("Sorted according to Price");
		}
		catch(Exception e)
		{
			System.out.println("Error: Sorting not working");
			Assert.fail();
		}
	}

@When("user clicks on quantity field")
public void user_clicks_on_quantity_field() {
	try {
	driver.findElement(By.xpath("//a[normalize-space()='Quantity']")).click();
	Thread.sleep(3000);
	}
	catch(Exception e) {
		System.out.println("unabel to click"+e);
	}
}
@Then("user is sorted in descending order")
public void user_is_sorted_in_descending_order() {
	try{
		String s1=driver.findElement(By.xpath("//table//following::tr[2]/td[6]")).getText();	
	String s2=driver.findElement(By.xpath("//table//following::tr[3]/td[6]")).getText();
	System.out.println(s1);
	System.out.println(s2);
	Assert.assertTrue(s1.compareTo(s2)<0 || s1.compareTo(s2)==0);
	
	System.out.println("Sorted according to Quantity");
	}
	catch(Exception e)
	{
		System.out.println("Error: Sorting not working");
		Assert.fail();
	}
}
@Given("user is on dashboard page")
public void user_is_on_dashboard_page() {
	 try
	   {
		   String s=driver.getTitle();
		   String ex="Dashboard";
		   Assert.assertEquals(s,ex);
		   System.out.println("User is on the Dashboard");
	   }
	    catch(Exception e) {
	    System.out.println("Error: Headings dont match. "+e);
	    Assert.fail();
	}
	
}

@When("user hover over the menu")
public void user_hover_over_the_menu() {
	 try {
	    	
    	 driver.findElement(By.xpath( "//body/div[@id='container']/nav[@id='column-left']/ul[@id='menu']/li[@id='catalog']/a[1]")).click();
    }
    catch(Exception e) {
    System.out.println("Not able to hover on catalog"+e);
    Assert.fail();
}
}



@When("user click on  the product")
public void user_click_on_the_product() {
	try {
		WebElement product= driver.findElement(By.xpath("//li[@id='catalog']//ul//li//a[contains(text(),'Products')]"));
		product.click();
	}
	catch(Exception e) {
		System.out.println("Not able click on login"+e);
		Assert.fail();
	}
}

@Then("user is navigated to product page")
public void user_is_navigated_to_product_page() {
	 try
	   {
		   String actual=driver.getTitle();
		   String ex="Products";
		   Assert.assertEquals(actual,ex);
		   System.out.println("User is on the Products page");
	   }
	    catch(Exception e) {
	    System.out.println("Error: Headings dont match. "+e);
	    Assert.fail();
	}
	
}

@When("user clicks on add product")
public void user_clicks_on_add_product() {
	try {
		  driver.findElement(By.xpath("(//a[@class='btn btn-primary'])[1]")).click();
		  System.out.println("clicked on add element");
	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to click on add element. "+e);
		Assert.fail();
	}
}


@Then("user is navigated to add product page")
public void user_is_navigated_to_add_product_page() {
	try {
		   String s=driver.findElement(By.xpath("(//h3[normalize-space()='Add Product'])[1]")).getText();
		   String ex="Add Product";
		   Assert.assertEquals(s,ex);
		   System.out.println("User is on the Add Product page");
	   }
	    catch(Exception e) {
	    System.out.println("Error: Headings dont match. "+e);
	    Assert.fail();
	}
	}

@When("user adds {string},{string},{string},{string},{string} and {string}")
public void user_adds_and(String productname, String description, String metatag, String metatagdesc, String producttag, String model) {
    
	try
	{
		driver.findElement(By.name("product_description[1][name]")).sendKeys(productname);
	    driver.findElement(By.xpath("//*[@id='language1']/div[2]/div/div/div[3]/div[2]")).sendKeys(description);
	    driver.findElement(By.xpath("(//input[@id='input-meta-title1'])[1]")).sendKeys(metatag);
	    driver.findElement(By.name("product_description[1][meta_description]")).sendKeys(metatagdesc);
	    driver.findElement(By.name("product_description[1][tag]")).sendKeys(producttag);
	 
	    driver.findElement(By.xpath("//a[normalize-space()='Data']")).click();
	    driver.findElement(By.xpath("//input[@id='input-model']")).sendKeys(model);
	    System.out.println("Details are entered");
	   
}
	catch(Exception e)
	{
		System.out.println("Error: Unable to enter details "+e);	
		Assert.fail();
		}
}
@When("user clicks on save")
public void user_clicks_on_save() {
	try {
		  driver.findElement(By.xpath("//*[@id='content']/div[1]/div/div/button/i")).click();
		  System.out.println("saved");
	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to save "+e);
		Assert.fail();
	}
}



@Then("user data gets {string}")
public void user_data_gets(String validated) {
	try{
		String s;
		String page=driver.findElement(By.xpath("//*[@id='content']/div[2]/div/div[1]/h3")).getText();
		if(page.equalsIgnoreCase("Product List"))
		 {
			s=driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		
			Assert.assertTrue(s.contains(validated));
			System.out.println(validated);
	
		 }
		
		else
		{
			s=driver.findElement(By.xpath("//*[@id='content']/div[2]/div[1]")).getText();
		 Assert.assertTrue(s.contains(validated));
		 
		 String pname=driver.findElement(By.xpath("//*[@id='language1']/div[1]/div/div")).getText();
		 String meta=driver.findElement(By.xpath("//*[@id='language1']/div[3]/div/div")).getText();
		
		 
		 if(pname.equals("Product Name must be greater than 3 and less than 255 characters!"))
			 System.out.println("Product Name must be greater than 3 and less than 255 characters!");
		 
		 if(meta.equals("Meta Title must be greater than 3 and less than 255 characters!"))
			 System.out.println("Meta Title must be greater than 3 and less than 255 characters!");
		 
		
		}
		
	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to modify the product "+e);
		Assert.fail();
	}
}


@Given("user is navigated to dashboard page")
public void user_is_navigated_to_dashboard_page() {
	 try
	   {
		   String s=driver.getTitle();
		   String ex="Dashboard";
		   Assert.assertEquals(s,ex);
		   System.out.println("User is on the Dashboard");
	   }
	    catch(Exception e) {
	    System.out.println("Error: Headings dont match. "+e);
	    Assert.fail();
	}
	
}


@When("user hover over the menu element")
public void user_hover_over_the_menu_element() {
	 try {
	    	
    	 driver.findElement(By.xpath( "//body/div[@id='container']/nav[@id='column-left']/ul[@id='menu']/li[@id='catalog']/a[1]")).click();
    }
    catch(Exception e) {
    System.out.println("Not able to hover on catalog"+e);
    Assert.fail();
}
}

@When("user click on  the product tag")
public void user_click_on_the_product_tag() {
	try {
		WebElement product= driver.findElement(By.xpath("//li[@id='catalog']//ul//li//a[contains(text(),'Products')]"));
		product.click();
	}
	catch(Exception e) {
		System.out.println("Not able click on login"+e);
		Assert.fail();
	}
}

@Then("user is redirected to product page")
public void user_is_redirected_to_product_page() {
	 try
	   {
		   String actual=driver.getTitle();
		   String ex="Products";
		   Assert.assertEquals(actual,ex);
		   System.out.println("User is on the Products page");
	   }
	    catch(Exception e) {
	    System.out.println("Error: Headings dont match. "+e);
	    Assert.fail();
	}
	
}



@When("user click on product to be edited")
public void user_click_on_product_to_be_edited() {
	try {
		WebElement product= driver.findElement(By.xpath("//tbody/tr[1]/td[8]/a[1]"));
		product.click();
	}
	catch(Exception e) {
		System.out.println("Not able click on login"+e);
		Assert.fail();
	}
}


@Then("user is directed to edit page")
public void user_is_directed_to_edit_page() {
	try {
		   String s=driver.findElement(By.xpath("//h3[normalize-space()='Edit Product']")).getText();
		   String ex="Edit Product";
		   Assert.assertEquals(s,ex);
		   System.out.println("User is on the Edit Product page");
	   }
	    catch(Exception e) {
	    System.out.println("Error: Headings dont match. "+e);
	    Assert.fail();
	}
	}


@When("user edits {string}, {string}, {string}, {string}, {string}, {string} , {string},{string}")
public void user_edits(String productname, String description, String metatagt, String metadesc, String metakey, String productkey, String model, String quantity) {
	try
	{
		driver.findElement(By.xpath("//input[@id='input-name1']")).clear();
		driver.findElement(By.xpath("//input[@id='input-name1']")).sendKeys(productname);
		
	    driver.findElement(By.xpath("//div[@class='note-editable panel-body']")).clear();
	    driver.findElement(By.xpath("//div[@class='note-editable panel-body']")).sendKeys(description);
	    
	    driver.findElement(By.id("input-meta-title1")).clear();
	    driver.findElement(By.id("input-meta-title1")).sendKeys(metatagt);
	    driver.findElement(By.id("input-meta-description1")).clear();
	    driver.findElement(By.id("input-meta-description1")).sendKeys(metadesc);
	    driver.findElement(By.id("input-meta-keyword1")).clear();
	    driver.findElement(By.id("input-meta-keyword1")).sendKeys(metakey);
	    driver.findElement(By.id("input-tag1")).clear();
	    driver.findElement(By.id("input-tag1")).sendKeys(productkey);
	   
	    driver.findElement(By.xpath("//*[@id=\"form-product\"]/ul/li[2]/a")).click();
	    driver.findElement(By.id("input-model")).clear();
	    driver.findElement(By.id("input-model")).sendKeys(model);
	    
	    driver.findElement(By.xpath("//input[@id='input-quantity']")).clear();
	    driver.findElement(By.xpath("//input[@id='input-quantity']")).sendKeys(quantity);
	    Thread.sleep(3000);
	   
}
	catch(Exception e)
	{
		System.out.println("Error: User unbale to modify the existing product "+e);	
		Assert.fail();
		}
}


@When("user clicks on save button")
public void user_clicks_on_save_button() {
	try {
		 driver.findElement(By.xpath("//*[@id='content']/div[1]/div/div/button/i")).click();
		 Thread.sleep(300);
	}
		catch(Exception e) {
			System.out.println("saving is done"+e);
		}
	}
	

@Then("user gets {string}")
public void user_gets(String Validation) {
	try{
		String s;
		String page=driver.findElement(By.xpath("//*[@id='content']/div[2]/div/div[1]/h3")).getText();
		if(page.equalsIgnoreCase("Product List"))
		 {
			s=driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		
			Assert.assertTrue(s.contains(Validation));
			System.out.println(Validation);
	
		 }
		
		else
		{
			s=driver.findElement(By.xpath("//*[@id='content']/div[2]/div[1]")).getText();
		 Assert.assertTrue(s.contains(Validation));
		 
		 String pname=driver.findElement(By.xpath("//*[@id='language1']/div[1]/div/div")).getText();
		 String meta=driver.findElement(By.xpath("//*[@id='language1']/div[3]/div/div")).getText();
		
		 
		 if(pname.equals("Product Name must be greater than 3 and less than 255 characters!"))
			 System.out.println("Product Name must be greater than 3 and less than 255 characters!");
		 
		 if(meta.equals("Meta Title must be greater than 3 and less than 255 characters!"))
			 System.out.println("Meta Title must be greater than 3 and less than 255 characters!");
		 
		
		}
		
	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to modify the product "+e);
		Assert.fail();
	}
}

@Given("user is at dashboard page")
public void user_is_at_dashboard_page() {
	 try
	   {
		   String s=driver.getTitle();
		   String ex="Dashboard";
		   Assert.assertEquals(s,ex);
		   System.out.println("User is on the Dashboard");
	   }
	    catch(Exception e) {
	    System.out.println("Error: Headings dont match. "+e);
	    Assert.fail();
	}
	
}

@When("user hover over the catalog tag")
public void user_hover_over_the_catalog_tag() {
	try {
    	
   	 driver.findElement(By.xpath( "//body/div[@id='container']/nav[@id='column-left']/ul[@id='menu']/li[@id='catalog']/a[1]")).click();
   }
   catch(Exception e) {
   System.out.println("Not able to hover on catalog"+e);
   Assert.fail();
}
}


@When("user click on  the prod tag")
public void user_click_on_the_prod_tag() {
	try {
		WebElement product= driver.findElement(By.xpath("//li[@id='catalog']//ul//li//a[contains(text(),'Products')]"));
		product.click();
	}
	catch(Exception e) {
		System.out.println("Not able click on login"+e);
		Assert.fail();
	}
}

@Then("user is navigated to prod page")
public void user_is_navigated_to_prod_page() {
	 try
	   {
		   String actual=driver.getTitle();
		   String ex="Products";
		   Assert.assertEquals(actual,ex);
		   System.out.println("User is on the Products page");
	   }
	    catch(Exception e) {
	    System.out.println("Error: Headings dont match. "+e);
	    Assert.fail();
	}
}

@When("user clicks on add product element")
public void user_clicks_on_add_product_element() {
	try {
		  driver.findElement(By.xpath("(//a[@class='btn btn-primary'])[1]")).click();
		  System.out.println("clicked on add element");
	}
	catch(Exception e)
	{
		System.out.println("Error: Unable to click on add element. "+e);
		Assert.fail();
	}
}

@Then("user is navigated to adding product page")
public void user_is_navigated_to_adding_product_page() {
	try {
		   String s=driver.findElement(By.xpath("(//h3[normalize-space()='Add Product'])[1]")).getText();
		   String ex="Add Product";
		   Assert.assertEquals(s,ex);
		   System.out.println("User is on the Add Product page");
	   }
	    catch(Exception e) {
	    System.out.println("Error: Headings dont match. "+e);
	    Assert.fail();
	}
	
}@When("user clicks on cancel button")
public void user_clicks_on_cancel_button() {
	try {
	driver.findElement(By.xpath("//a[@class='btn btn-default']")).click();
	}
	catch(Exception e) {
		System.out.println("unable to click"+e);
}
}

@Then("user is redirected to the product page")
public void user_is_redirected_to_the_product_page() {
	 try
	   {
		   String actual=driver.getTitle();
		   String ex="Products";
		   Assert.assertEquals(actual,ex);
		   System.out.println("User is on the Products page");
	   }
	    catch(Exception e) {
	    System.out.println("Error: Headings dont match. "+e);
	    Assert.fail();
	}
	
}
}




	
	





	