using Newtonsoft.Json;
namespace Company.Function
{
    public class Counter
    {
        [JsonPropertyAttribute(PropertyName = "id")]

        public string Id { get; set;}
        [JsonProperty(PropertyName = "count")]

        public int Count { get; set; }
    }

}