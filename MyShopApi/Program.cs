using Microsoft.EntityFrameworkCore;
using MyShopApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Read environment variables for DB_USER and DB_PASSWORD
var dbUser = Environment.GetEnvironmentVariable("DB_USER");
var dbPassword = Environment.GetEnvironmentVariable("DB_PASSWORD");

if (string.IsNullOrEmpty(dbUser) || string.IsNullOrEmpty(dbPassword))
{
    throw new InvalidOperationException("Database user and password must be set in environment variables.");
}

// Construct the connection string dynamically
var connectionString = $"{builder.Configuration.GetConnectionString("DefaultConnection")};User ID={dbUser};Password={dbPassword};";

// Add services to the container.
builder.Services.AddDbContext<MyDbContext>(options =>
    options.UseSqlServer(connectionString));

builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
