-- schema.prisma // Define the data model, relationships and constraints of my data.

--Model-View-Controller architectural pattern
    --Models: the structure of my data.
        - In the context of Prisma, your Prisma schema (schema.prisma) defines the models that map to your database tables.
            Prisma's generated models (PrismaClient) serve as your data access layer.
    --Controllers: Controllers contain the application logic that handles incoming requests, interacts with models (through Prisma),
        performs business logic, and prepares a response to send back.
    --Routes: Routes define the endpoints of your API or web application and specify which controller method handles each endpoint.
        They map HTTP methods (GET, POST, PUT, DELETE, etc.) to specific controller actions.


Week3Day4


--Plan:
    -Search for an item (movie) DONE and TESTED
    -View details of item 
    -Add item to favorites list

--BackEnd:

    --Prisma entities: DONE
    --Models:
        -Tested:
            -Movie[] declared
            -getMovies: get all the movies stored
            -addMovie: add a movie to the movies list
            -searchMovies: search through a string and get the movies.title of the match

        -Re-conversions:
            -a variation of getMovies for getUserFavorites DONE
            -a variation of addMovie for addMovieToFavorites DONE


        -Built:
            -findMovieTitleByString

        -To build:
            -Get user's favorite list DONE
            -Add movie to user's favorite list DONE
        -Comments:
            -See Re-convertions in Models.
                -a variation of getMovies for getUserFavorites
                -a variation of addMovie for addMovieToFavorites


    --ToDoList:
        -Implement and test findMovieTitleByString DONE and TESTED
        -getUserFavorites: variation of getMovies TESTED
        -Variation of addMovie DONE and TESTED
        -Tag a Movie with a Tag
            -Create a Tag (string)
            -User Tags a Movie with a Tag

        -Set my PrismaClient operations


--FrontEnd:

