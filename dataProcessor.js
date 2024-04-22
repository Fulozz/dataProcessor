// Passar para o backend realizar a operação

export class dataProcessor  {
    constructor(salesData){
        this.salesData = salesData
    }
    async getSalesData(){
        const processedData = []
        for( const yearMonth in this.salesData){
            for(const day in monthData){
                const dayData = monthData[day];

                const totalOrders = dayData.length;
                const totalValue = dayData.orders.reduce((acc, order) => {
                    const orderValue = order.items.reduce((acc, item) => acc + (item.quantiy * item.price), 0);
                    return acc + orderValue;
                })
                processedData.push({
                    label: `${yearMonth}-${day}`,
                    orders: totalOrders,
                    value: totalValue
                })
            }
        }
        return processedData;
    }
}