# import time
# from webdriver_manager.chrome import ChromeDriverManager
# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.support import expected_conditions as EC
from values import candidateCommiteeCodes, commiteeCodes

candidate_base_url = 'https://www.fec.gov/data/receipts/?data_type=processed&'
committee_base_url = 'https://www.fec.gov/data/disbursements/?data_type=processed&'
#url_end = 'two_year_transaction_period=2022&min_date=07%2F16%2F2022&max_date=12%2F31%2F2022'
url_end = 'min_date=08%2F01%2F2022&max_date=03%2F28%2F2023'


for codegroup in commiteeCodes:
    url_middle = [] 
    for code in codegroup:
        url = []
        url_middle.append(f'committee_id={code}&')
    print(f"{committee_base_url}{''.join(url_middle)}{url_end}")
    print(url + url_end)
# driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

# for code in candidateCommiteeCodes:
#     url = base_url + "committee_id=" + code + url_end
#     driver.get(url)
#     # button = driver.find_element(By.CLASS_NAME, "button--exexport_buttontime.sleep(10)
#     try:
#         export_button = WebDriverWait(driver, 20).until(
#             EC.element_to_be_clickable((By.CLASS_NAME, "button--export"))
#         )
#         time.sleep(20)
#         export_button.click()
#         time.sleep(20)
#         download_button = WebDriverWait(driver,20).until(
#             EC.element_to_be_clickable((By.CLASS_NAME, "download__button"))
#         )
#         download_button.click()
#         time.sleep(20)
#         close_button = WebDriverWait(driver,20).until(
#             EC.element_to_be_clickable((By.CLASS_NAME, 'download__cancel'))
#         )
#         close_button.click()
#         time.sleep(20)
#     except:
#         print("okay this one doesn't work: " + code)

# print('okay all done')