import time
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support import expected_conditions as EC
from values_copy import candidateCommiteeCodes, commiteeCodes

base_url = 'https://www.fec.gov/data/receipts/?data_type=processed&'
url_end = '&two_year_transaction_period=2022&min_date=01%2F01%2F2021&max_date=12%2F31%2F2022'

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

for code in candidateCommiteeCodes:
    url = base_url + "committee_id=" + code + url_end
    driver.get(url)
    # button = driver.find_element(By.CLASS_NAME, "button--exexport_buttontime.sleep(10)
    try:
        export_button = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((By.CLASS_NAME, "button--export"))
        )
        time.sleep(60)
        export_button.click()
        time.sleep(60)
        download_button = WebDriverWait(driver,20).until(
            EC.element_to_be_clickable((By.CLASS_NAME, "download__button"))
        )
        download_button.click()
        time.sleep(60)
        close_button = WebDriverWait(driver,20).until(
            EC.element_to_be_clickable((By.CLASS_NAME, 'download__cancel'))
        )
        close_button.click()
        time.sleep(60)
    except:
        print("okay this one doesn't work: " + code)

print('okay all done')