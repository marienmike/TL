import pandas as pd
def xlsx_to_csv(xlsx_path, csv_path):
    """
    Convertit un fichier Excel (.xlsx) en CSV avec des virgules comme séparateur.
    Les cellules contenant des virgules sont automatiquement entourées de guillemets.

    Args:
        xlsx_path (str): Chemin du fichier .xlsx source.
        csv_path (str): Chemin du fichier .csv de sortie.
    """
    df = pd.read_excel(xlsx_path)
    df["End"] = df["End"].astype("Int64")  # Remplace "End" par le nom réel de ta colonne
    df["Start"] = df["Start"].astype("Int64")  # Remplace "Start" par le nom réel de ta colonne
    df.to_csv(csv_path, sep=',', index=False, quoting=1)  # quoting=1 <=> csv.QUOTE_ALL

if __name__ == "__main__":
    xlsx_path = input("Entrez le chemin du fichier .xlsx à convertir : ")
    csv_path = input("Entrez le nom du fichier .csv de sortie : ")
    xlsx_to_csv(xlsx_path, csv_path)