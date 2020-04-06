# **TODO**
## **FrontEnd - TODO**

#### **Home**
- [x] Home Page "Featured Tab Replicate"
- [ ] Home Page Highlighter
- [ ] InfiniteScroll or Auto Load Next page on hover with Animation
    - [ ] Studio
    - [ ] Feed
- [ ] Explore - Alime's theme
- [ ] Signin/SignUp - Forms

#### **Studio**
- [ ] Unsplash - migrate lightgallery
- [ ] Index - redesign with tulen
- [x] Instagram Slider - Studio's 

#### **Writings**
- [ ] Feed Home Page design updates
- [ ] [QuillJS](https://quilljs.com/), WYSIWYG editor
- [ ] [Uppy](https://uppy.io/), File Uploader (Optional)
- [ ] Compose Post Page

#### **Feed**
- [ ] Feed Home Page design updates

#### **Social**

## **BackEnd - TODO**
- ### **Database**
- ### **Media Storage**
- ### **API**

## **Infrastructure - TODO**

## **REPO - TODO**
- ### **Folder Structure**
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