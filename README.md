# StriveM6D7
Strive Blog API 

You are in charge of improving last module APIs for the Strive Blog application by adding Postgres

Here you can find the Frontend already created
 
In this "step" the application should enable the creation, editing, deletion, listing of blog posts

Blog
Blog posts should contain following information:

{
	    "id": 1,
	    "category": "ARTICLE CATEGORY",
	    "title": "ARTICLE TITLE",
	    "cover":"ARTICLE COVER (IMAGE LINK)",
	    "read_time_value": 2,
	    "read_time_unit": "minute"
	    "author":"AUTHOR FOREIGN KEY",
	    "content": "HTML",
	    "created_at": "DATE"          
}
 
Routes
GET /blog => returns the list of blog with author
GET /blog /123 => returns a single blog with author
POST /blog => create a new blog
PUT /blog /123 => edit the blog with the given id
DELETE /blog /123 => delete the blog with the given id
 
 Author 
{
	    "id": 1,
	    "name": "AUTHOR NAME",
	    "surname": "AUTHOR SURNAME",
	    "avatar":"AVATAR(IMAGE LINK)",
	    "created_at": "DATE"          
}

Routes

GET /author => returns the list of author
GET /author /123 => returns a single author
POST /author => create a new author
PUT /author /123 => edit the author with the author id
DELETE /author /123 => delete the author with the given id
 

The persistence must be granted via Postgres