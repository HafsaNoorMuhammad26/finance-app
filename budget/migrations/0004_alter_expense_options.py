# Generated by Django 5.1.2 on 2024-11-08 17:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("budget", "0003_alter_expense_project"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="expense",
            options={"ordering": ("-amount",)},
        ),
    ]
