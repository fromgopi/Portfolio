from pathlib import Path

HOME_FILE = 'db/home.json'

current_file = Path(__file__).parent

HOME_PATH = current_file.joinpath(f'{current_file}/{HOME_FILE}')