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

// Add CORS configuration
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        var frontendOrigin = builder.Environment.IsDevelopment()
            ? "http://localhost:3000"  // Allow local development origin
            : "https://orange-coast-04ce4a30f.5.azurestaticapps.net"; // Allow your Azure frontend URL

        policy.WithOrigins(frontendOrigin)
              .AllowAnyMethod()  // Allow any HTTP methods (GET, POST, PUT, DELETE, etc.)
              .AllowAnyHeader(); // Allow any headers
    });
});

builder.Services.AddControllers();

var app = builder.Build();

// Use the CORS policy
app.UseCors("AllowReactApp");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
