
from bs4 import BeautifulSoup
import requests
import pandas as pd

Make=[]
Model=[]
Year=[]
Km=[]
Transmission=[]
Fuel=[]
Price=[]

links = [line.strip() for line in open('links1.txt')]
for link in links :
    page = requests.get(link)
    soup = BeautifulSoup(page.content,'html.parser')

    try:
        mk = soup.find('span',{'class':'DescDataSubTit'},string="Make")
        Make.append(mk.findNext('span').text.strip())
    except AttributeError:
        Make.append('None')

    try:
        md = soup.find('span',{'class':'DescDataSubTit'},string="Model")
        Model.append(md.findNext('span').text.strip())
    except AttributeError:
        Model.append('None')

    try:
        yr = soup.find('span',{'class':'DescDataSubTit'},string="Used since")
        Year.append(yr.findNext('span').text.strip())
    except AttributeError:
        Year.append('None')

    try:
        km = soup.find('span', {'class':'DescDataSubTit'},string="Km")
        k = km.findNext('span').text.strip()
        Km.append(k[0:-3])
    except AttributeError:
        Km.append('None')

    try:
        tr = soup.find('span', {'class': 'DescDataSubTit'}, string="Transmission")
        Transmission.append(tr.findNext('span').text.strip())
    except AttributeError:
        Transmission.append('None')

    try:
        fu = soup.find('span',{'class':'DescDataSubTit'},string="Fuel")
        Fuel.append(fu.findNext('span').text.strip())
    except AttributeError:
        Fuel.append('None')


    try:
        pr = soup.find('span', {'class':'usedUnitCarPrice'}).text.strip()
        Price.append(pr[0:-4])
    except AttributeError:
        Price.append('None')


d = dict(Make=Make,Model=Model,Year=Year,Km=Km,Transmission=Transmission,Fuel=Fuel,Price=Price)
df = pd.DataFrame.from_dict(d)
df.to_csv("cars2.csv",index=False)

print('success')
    