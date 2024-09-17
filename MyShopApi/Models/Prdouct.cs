// Models/Product.cs
namespace MyShopApi.Models // Ensure this namespace is correct
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty; // Initialized to avoid nullable warnings
        public string Description { get; set; } = string.Empty; // Initialized to avoid nullable warnings
        public decimal Price { get; set; }
        public string ImageUrl { get; set; } = string.Empty; // Initialized to avoid nullable warnings
    }
}
