import vim
from omnipytent import *


@task
def serve(ctx):
    BANG('npm', 'run', 'serve')


@task
def gui(ctx):
    BANG('npm', 'run', 'serve')
