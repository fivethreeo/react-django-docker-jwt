# React with server-side rendering and django api on docker

## Features

* Building using [razzle][razzle]
* Runtime configuration in server and client
* Server hot module reloading
* Server-side rendering
* Suspense server side using [react-ssr-prepass][react-ssr-prepass]
* Server-side handlers for graceful degradation of registration/activation/login views.  
* Code splitting using [@loadable/component][@loadable/component]
* Babel 7 with fragments
* React 16.8.6 with hooks
* Using [formik][formik] for forms with bootstrap4
* Registration/activation and authentication using JWT and graphene
* Using [træfik][træfik] for routing requests and ssl.

## How to use

Download the example [or clone](https://github.com/fivethreeo/react-ssr-django-jwt-docker.git):

```bash
curl https://codeload.github.com/fivethreeo/react-ssr-django-jwt-docker/tar.gz/master | tar -xz react-ssr-django-jwt-docker-master
cd react-ssr-django-jwt-docker-master
```

### To run using docker

Build images:

```bash
docker-compose -f docker-compose.dev.yml build
```

Run database migrations:

```bash
touch db.sqlite3
docker-compose -f docker-compose.dev.yml run djangoapi python manage.py migrate
```

Run all services (traefik, djangoapi, reactapp):

```bash
docker-compose -f docker-compose.dev.yml up
```

To test registration email:

```bash
export EMAIL_URL=smtp://username:password@localhost:25
```

Go to [https://localhost](https://localhost).

To remove https warnings add `certs/localhost_https_ca.pem` to authorities in your browser.

To make your own certs:

```bash
cd certs
rm localhost_https*
bash makecert.sh --dn-c "US" --dn-st "TX" --dn-l "Houston" \
  --dn-o "Your organization" --dn-ou "Your department" \
  --dn-email "your@email.com" \
  --common-name "localhost" --dns "localhost" --ip "127.0.0.1" --https
```

### To run locally:

Install requirements:

```bash
virtualenv venv
venv/bin/pip install -r requirements.txt
yarn install
```

Run database migrations:

```bash
venv/bin/python manage.py migrate
```

Start the django api and the react app:

```bash
venv/bin/python runserver.py & pid=$! && sleep 5 && pid=`pgrep -P $pid` && yarn start
kill -9 $pid
```

Go to [http://localhost](http://localhost).

## Ideas behind the example

* [react-universally][react-universally]
* [razzle][razzle]
* [Setting up JWT Authentication][JWT A]

  [react-universally]: <https://github.com/ctrlplusb/react-universally>
  [razzle]: <https://github.com/jaredpalmer/razzle>
  [JWT A]: <https://thinkster.io/tutorials/django-json-api/authentication>
  [@loadable/component]: <https://github.com/smooth-code/loadable-components#readme>
  [react-ssr-prepass]: <https://github.com/FormidableLabs/react-ssr-prepass>
  [træfik]: <https://traefik.io/>
  [formik]: <https://github.com/jaredpalmer/formik>
