using Microsoft.EntityFrameworkCore;

public class MyDbContext : DbContext
{
    public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
    {
    }

    // Define DbSets for your entities
    public DbSet<Product> Products { get; set; }
    // Add more DbSets as needed
}
