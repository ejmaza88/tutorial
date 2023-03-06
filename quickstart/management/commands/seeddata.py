import sqlite3
from pathlib import Path
import pendulum

from django.conf import settings
from django.core.management.base import BaseCommand


class Command(BaseCommand):

    DATABASE_FILE = Path(settings.BASE_DIR, "quickstart", "data", "data.db")

    def get_conn(self):
        return sqlite3.connect(self.DATABASE_FILE)

    def handle(self, *args, **options):
        cursor = self.get_conn().cursor()

        sql = """
        select *
        from Diaper;
        """

        for row in cursor.execute(sql):
            diaper_change_time = pendulum.from_timestamp(row[2])
            print(diaper_change_time)

        self.get_conn().close()
