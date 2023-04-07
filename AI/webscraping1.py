
from bs4 import BeautifulSoup
import requests
links = []


f1 = open(r'C:\Users\ahmed\Videos\Project\webscraping\links1.txt', 'w')
for i in range(1,661) :
    url =f'https://eg.hatla2ee.com/en/car/page/{i}'
    page = requests.get(url)
    soup = BeautifulSoup(page.content,'html.parser')
    
    cars = soup.find_all('div',{'class':'newCarListUnit_header'})
    for car in cars:
        a = car.find('a').get('href')
        a = 'https://eg.hatla2ee.com'+a
        links.append(a)
        f1.write(a+'\n')
f1.close()
    
print(len(links))

