using Microsoft.AspNetCore.Mvc;
using Mission14_nj236API.Data;

namespace Mission14_nj236API.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class MovieController : Controller
    {
        private JoelHiltonMovieCollectionContext context;
        public MovieController(JoelHiltonMovieCollectionContext temp) {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            return context.Movies
                .Where(x => x.Edited == "Yes")
                .ToArray();
        }
    }
}
