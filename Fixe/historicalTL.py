# Import the module
import historical_timelines

# Import the HistoricalTimeline object
from historical_timelines import HistoricalTimeline, HistoricalEvent, HistoricalDate

# Demander le nom du fichier CSV à l'utilisateur
TL_name = input("Entrez le nom du fichier CSV : ")
csv_file = TL_name+".csv"

et = HistoricalTimeline(TL_name)
timeline_json = HistoricalTimeline.json_from_csv(
    csv_file,
    "Event",
    "Description",
    "Label",
    "Start",
    "End",
    # historical_timelines.Era.BCE
)

et.populate_timeline_from_dict(timeline_json)
et.render_timeline(TL_name + ".html")

