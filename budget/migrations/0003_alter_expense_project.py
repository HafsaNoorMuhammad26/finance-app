# Generated by Django 5.1.2 on 2024-11-03 15:05

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("budget", "0002_expense_category_alter_expense_amount"),
    ]

    operations = [
        migrations.AlterField(
            model_name="expense",
            name="project",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="expenses",
                to="budget.project",
            ),
        ),
    ]
