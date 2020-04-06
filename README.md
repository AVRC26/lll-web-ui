# Hello World! [lll.org.in](https://lll.org.in)

## **Design**
### **Home**
- Load Home Feed
### **Blog**
- Load All Personal Blog Content
### **Public Feed**
- Load Publicly Available Feed
### **Personal Feed**
- Load Feeds from Social Media
### **Contact**
- Load All Posts
### **About**
- Load All Posts

## **Folder Structure**
    docs/               # documentation
    scripts/
      manage.py         # installed to PATH via setup.py
    project_name/       # project dir (the one which django-admin.py creates)
      apps/             # project-specific applications
        accounts/       # most frequent app, with custom user model
        __init__.py
        ...
      settings/         # settings for different environments, see below
        __init__.py
        production.py
        development.py
        ...
    
      __init__.py       # contains project version
      urls.py
      wsgi.py
    static/             # site-specific static files
    templates/          # site-specific templates
    tests/              # site-specific tests (mostly in-browser ones)
    tmp/                # excluded from git
    setup.py
    requirements.txt
    requirements_dev.txt
    pytest.ini

## **Planned Components**
    Facebook
    Twitter
    Instagram
    LinkedIN
    Google Search
    News
        - India Today
        - Google News
        - MSN News
            + https://apidocs.microsoft.com/services/microsoftnewsapi
        - NEWS API
            + https://newsapi.org/
    Curiosity
    RSS Feed
        - Feedly(renew access_token is manual process)
            + https://developer.feedly.com/
    Cricket
        - ESPN Cricinfo
    Finance
        - Yahoo
            + https://rapidapi.com/apidojo/api/yahoo-finance1
    Weather
        - Dark Sky
            + https://darksky.net/dev
    Youtube
        + https://developers.google.com/youtube/documentation
    Travel 
        - Lonely Planet
        - Tripadvisor
            + https://developer-tripadvisor.com/content-api/
    
    Wallpaper
        - Unsplash
            + https://unsplash.com/developers
    Blog


## Features Required:

Home Page "Featured Tab Replicate"
InfiniteScroll
    - Studio
    - Feed

STUDIO: 
Unsplash - migrate lightgallery
Index - redesign with tulen
Instagram Slider - Studio's 

HOME:
Home Template
Explore - Alime's theme
Signin/SignUp - Forms
Compose Post Page
Home {age Highlighter}