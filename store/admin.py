from django.contrib import admin
from .models import *
# Register your models here.

#super user - admin admin
#kandycereed Kyng021997!

admin.site.register(Customer)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
