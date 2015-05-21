
def set_variables
  # @base_url = 'https://hastaffdev.agilexhealth.com:8443/'
  # @base_url = 'https://hastafftest.agilexhealth.com/'
  @base_url = 'http://localhost:8080/'
  # @base_url = 'http://10.0.12.67:8080/'

  @app_url = @base_url+'ptsd'
  @launch_pad_url = @base_url+'launchpad/'
end

def accept_eula
  sleep 2
  @driver.find_element(:id, 'accept-button').click;
  sleep 2
end

def logout
  @driver.get(@app_url)
  wait { @driver.find_element(:id, 'menu-btn') }
  @driver.find_element(:id, 'menu-btn').click
  @driver.find_element(:id, 'logout-btn').click
  sleep 2
end

def login_js
  wait = Selenium::WebDriver::Wait.new(:timeout => 80)
  @driver.get(@app_url)
  wait.until { @driver.find_element(:id, "login-button") }
  # puts '(logging in as ' + username + ')'
  @driver.find_element(:id, "login-button").click
  @driver.execute_script("javascript:$('#name-c').val('cprs1234');$('#password').val('cprs4321$');$('#va-hospital').val('TEST VAMC 3');$('#facilityCode').val('777');$('#facilityName').val('TEST VAMC 3');$('#loginButton').click();")
  sleep 15
end

def login (username, password, facility)
  wait = Selenium::WebDriver::Wait.new(:timeout => 80)
  @driver.get(@app_url)
  wait.until { @driver.find_element(:id, "login-button") }
  # puts '(logging in as ' + username + ')'
  @driver.find_element(:id, "login-button").click
  wait.until { @driver.find_element(:id, "name-c").displayed? }
  @driver.find_element(:id, "name-c").send_keys username
  @driver.find_element(:id, "password").send_keys password
  @driver.find_element(:css, "input.ui-input-text.ui-body-d").send_keys facility
  sleep(5); #give time for autocomplete
  wait.until{ @driver.find_element(:css, "a[data-facility-name='" + facility + "']").displayed? }
  @driver.find_element(:css, "a[data-facility-name='" + facility + "']").click
  sleep 5 # another pause to let that populate
  @driver.find_element(:id, 'loginButton').click
  sleep 2
end

def loginAsStaff01()
  login('zztest.staff01', 'pass', 'DC VAMC')
end

def loginAsDoc123(site)
  @site = ( defined?(site) ) ? site : 'TEST VAMC'
  login('doc123', 'doc123!!', @site)
end

def loginAsDoc123DC()
  login('doc123', 'doc123!!', 'DC VAMC')
end

def loginAsScvtest2()
  login('zztest.scvtest2', 'pass', 'TEST VAMC 3')
end

def loginAsCprs1234()
  login('cprs1234', 'cprs4321$', 'TEST VAMC 3')
end

def loginAsClerk0987()
  login('clerk0987', 'clerk7890$', 'TEST LV VAMC')
end

def loginAsClerk6767()
  login('clerk6767', 'clerk7676$', 'TEST VAMC 3')
end


