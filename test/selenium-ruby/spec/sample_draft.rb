require_relative 'spec_helper'

describe 'Google test' do
  before :all do
    @driver = Selenium::WebDriver.for :firefox
    @accept_next_alert = true
    @driver.manage.timeouts.implicit_wait = 3
    @verification_errors = []
    @app_url = 'http://google.com'
    @driver.get(@app_url)
  end
  after(:all) do
    @driver.quit
    expect(@verification_errors).to eq []
  end

  context 'The home page' do
    it 'will have a title of Google' do
      expect(@driver.title).to eq "Google"
    end
    it 'will have a search input field' do
      expect(@driver.find_element(:id, "gbqfq").text).to eq ""
    end
    it 'will have a search button' do
      expect(@driver.find_element(:id, "gbqfba").text).to eq "Google Search"
    end
  end

  context 'The search results page' do
    it 'will have a title that matches the search term' do
      @driver.find_element(:id, "gbqfq").clear
      @driver.find_element(:id, "gbqfq").send_keys "selenium webdriver"
      @driver.find_element(:id, "gbqfq").send_keys :enter
      wait { element_present?(:link, "Selenium WebDriver") }
      expect(@driver.title).to eq "selenium webdriver - Google Search"
    end
    it 'will default to web results' do
      expect(@driver.find_element(:css, "#hdtb_msb div.hdtb_msel").text).to eq "Web"
    end
  end
end



