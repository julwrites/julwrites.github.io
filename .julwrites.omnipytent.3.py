import vim
from omnipytent import *


@task
def serve(ctx):
    TERMINAL_PANEL('npm', 'run', 'serve')


@task
def gui(ctx):
    TERMINAL_PANEL('elm', 'reactor')
