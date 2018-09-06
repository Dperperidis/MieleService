using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MieleServiceApp.Model
{
    public class ExternalTechs
    {
        public int Id { get; set; }
        public string Area { get; set; }
        public string Date { get; set; }
        public string customerId { get; set; }
        public string FullName { get; set; }
        public string Order { get; set; }
        public string Origin { get; set; }
        public string Model { get; set; }
        public string Damage { get; set; }
        public string ServiceCost { get; set; }
        public string PartsCost { get; set; }
        public string TotalCost { get; set; }
        public string ServiceDesc { get; set; }
    }
}
