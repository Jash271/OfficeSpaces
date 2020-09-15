cd Backend
cd OfficeSpaces
pip3 install -r requirements.txt
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver

cd Frontend
cd officespaces
npm i 
npm start

