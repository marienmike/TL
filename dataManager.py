import pandas as pd
import re

def formater_date(chaine):
    """
    Transforme une chaîne représentant une date en format 'AAAA-MM-JJ'.
    Si seule l'année est présente, retourne 'AAAA-01-01'.

    Exemples :
    - '2023' -> '2023-01-01'
    - '2023-07' -> '2023-07-01'
    """
    if chaine == '0':
        return '0'
    # Vérifier si la chaîne est une année seulement
    elif re.fullmatch(r'\d{1,4}', chaine):
        return chaine.zfill(4) + "-01-01"
    
    # Vérifier si la chaîne est année-mois-jour
    elif re.fullmatch(r'\d{1,4}-\d{1,2}-\d{1,2}', chaine):
        annee, mois, jour = chaine.split('-')
        return annee.zfill(4) + "-" + mois.zfill(2) + "-" + jour.zfill(2)
    
    else:
        raise ValueError(f"Format de date non reconnu : {chaine}")


csv_file = 'Data/Curated_MA.csv'
timeline_data = pd.read_csv(csv_file, encoding='utf-8', delimiter=';')

timeline_data=timeline_data.assign(id=timeline_data.index + 1)
timeline_data=timeline_data[['id', 'content', 'start', 'end', 'groupname']]
timeline_data['end'].fillna(0, inplace=True)
timeline_data['end'] = timeline_data['end'].astype(int)
timeline_data.insert(4, 'type', 'point')
timeline_data.insert(5, 'group', 0)
print(timeline_data.head())

start_curated = timeline_data['start'].tolist()
for i in range(len(start_curated)):
    try:
        start_curated[i] = formater_date(start_curated[i])
    except ValueError as e:
        print(f"Erreur de format pour la date '{timeline_data['start'][i]}': {e}")
        start_curated[i] = None  

end_curated = timeline_data['end'].tolist()

for i in range(len(end_curated)):
    try:
        date_stringified = str(end_curated[i])
        end_curated[i] = formater_date(date_stringified)
    except ValueError as e:
        print(f"Erreur de format pour la date '{timeline_data['start'][i]}': {e}")
        end_curated[i] = None  

timeline_data['start'] = start_curated
timeline_data['end'] = end_curated

#Si "end" est différent de 0, on considère que c'est une plage de dates 
timeline_data.loc[timeline_data['end'] != '0', 'type'] = 'range'
timeline_data.loc[timeline_data['end'] == '0', 'end'] = None

#Attribution du groupe en fonction du groupname
timeline_data.loc[timeline_data['groupname'] == 'Europe médiévale', 'group'] = 1
timeline_data.loc[timeline_data['groupname'] == 'Islam médiéval', 'group'] = 2
print(timeline_data.head())


with open('TL_data.json', 'w', encoding='utf-8') as file:
    timeline_data[['id','content','start','end','type','group']].to_json(file, force_ascii=False, orient='records')





    

