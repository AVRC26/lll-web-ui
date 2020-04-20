# **TODO**
## **FrontEnd - TODO**

#### **Home**
- [x] Home Page "Featured Tab Replicate"
- [x] Home Page Highlighter
- [ ] InfiniteScroll or Auto Load Next page on hover with Animation
    - [ ] Studio
    - [ ] Feed
- [x] Explore - Alime's theme
- [x] Signin/SignUp - Forms
- [x] Make Main Menus of Childs href and Make Arrows Clickable (found alternative)
- [ ] Add Categories/Title to Individual Home Pages
- [ ] Integrate cool Select Box [HERE](https://codepen.io/maggiben/pen/ubHiy)
- [ ] Brainstorm Landing Design about indivudal pages for every section (Writings -> Life)
- [ ] learn Owl Carousel
    - [ ] Investigate tiny-slider [HERE](https://github.com/ganlanyuan/tiny-slider)
- [ ] add unsplash slider at the bottom of homepage (like studio instagram slider)
- [ ] Popular Posts as Carousel for Writings/Studio/Feed/Social

#### **Studio**
- [ ] Unsplash - migrate lightgallery
- [x] Index - redesign with tulen
- [x] Instagram Slider - Studio's 
- [x] Logo Shrinks than others.
- [x] [filepOnd](https://pqina.nl/filepond/), File Uploader (Optional)
  - [ ] filepOnd design tweak for Vertical images
  - [ ] learn filepOnd

#### **Writings**
- [x] Feed Home Page design updates
    - [x] Updated with Homepage Timeline
- [x] [CKEditor 5](https://ckeditor.com/ckeditor-5/demo/), WYSIWYG editor
- [x] Compose Post Page
- [ ] Investigate CKEditor 4
- [ ] BUG: Compose Article is moving to top more 
- [ ] Learn CKEditor5 
    - [ ] Integrate ADD/RETRIVE Data [HERE](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/saving-data.html)

#### **Feed**
- [x] Feed Home Page design updates
- [x] Slides -> info is showing on zoom out
- [ ] Migrate Yahoo! Finance to Business Insider
- [ ] Categorize to business, entertainment, general, health, science, sports, technology

#### **Social**
- [ ] Slides Progress fill Improper Filling

## **BackEnd - TODO**
- ### **Database**
-[ ] Data Base Structure
- ### **Media Storage**
- [ ] AWS S3 Configuration
- ### **API**
- [ ] Python Flash Framework

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