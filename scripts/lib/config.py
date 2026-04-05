import os
from scripts.lib import yaml

def get_config(repo_root):
    """
    Returns the loaded project config.yaml.
    If it does not exist, returns a default configuration dictionary.
    """
    config_path = os.path.join(repo_root, "config.yaml")
    if os.path.exists(config_path):
        return yaml.SimpleYaml.load(config_path)

    return {
        "project": {
            "name": "default"
        },
        "agents": {
            "audit_log": "logs/audit.jsonl"
        }
    }
